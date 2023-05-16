import SelectDropdown from "@/Components/SelectDropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Quiz } from "@/interfaces/Quiz";
import { HomeProps } from "@/types/HomeProps";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const noCategorySelectedValue = "None";
const quizzesUrl = "/quizzes";

type QueryParams = {
    page: number;
    limit?: number;
    category?: string;
};

export default function Home({ auth, categories }: HomeProps) {
    categories = [{ id: -1, category: noCategorySelectedValue }, ...categories];

    const [quizzes, setQuizzes] = useState<Quiz[] | undefined>(undefined);
    const [selectedCategory, setSelectedCategory] = useState(
        noCategorySelectedValue
    );
    const [currentPage, setCurrentPage] = useState(1);
    const totalPagesRef = useRef<number | undefined>(undefined);

    function getQuizzes(
        handleSetQuizzes: (newQuizzes: Quiz[]) => void,
        ignore: boolean
    ) {
        async function fetchData() {
            let queryParams: QueryParams = { page: currentPage };
            if (selectedCategory !== noCategorySelectedValue)
                queryParams = { ...queryParams, category: selectedCategory };
            const result = await axios.get(quizzesUrl, {
                params: queryParams,
            });
            if (!ignore) {
                totalPagesRef.current = result.data.totalPages;
                handleSetQuizzes(result.data.quizzes);
            }
        }

        ignore = false;
        fetchData();
    }

    useEffect(() => {
        let ignore = false;
        if (totalPagesRef.current && currentPage <= totalPagesRef.current) {
            getQuizzes((newQuizzes: Quiz[]) => {
                setQuizzes((previous) =>
                    previous ? [...previous, ...newQuizzes] : [...newQuizzes]
                );
            }, ignore);
        }
        return () => {
            ignore = true;
        };
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
        let ignore = false;
        getQuizzes((newQuizzes: Quiz[]) => {
            setQuizzes(newQuizzes);
        }, ignore);
        return () => {
            ignore = true;
        };
    }, [selectedCategory]);

    function handleScroll(e: React.UIEvent<HTMLDivElement>): void {
        const containerHeight = e.currentTarget.clientHeight;
        const scrollHeight = e.currentTarget.scrollHeight;

        const scrollTop = e.currentTarget.scrollTop;
        if ((scrollTop + containerHeight) / scrollHeight === 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="bg-sky-600 dark:bg-blue-900 shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 flex justify-center bg-[url('/public/uploads/LightHomeHatter.png')]
                                         dark:bg-[url('/public/uploads/DarkHomeHatter.png')] bg-cover bg-left-bottom">
                            <div className=" mt-4 mr-6 " >

                                <SelectDropdown
                                    values={categories.map((c) => c.category)}
                                    onSelect={(value) =>
                                        setSelectedCategory(value)
                                    }
                                    selectedValue={""}
                                    icon={true}
                                    
                                />
                            </div>

                            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                                {quizzes.map((quiz) => (
                                    <Link
                                        key={quiz.id}
                                        href={`/quiz/${quiz.id}`}
                                        className="m-5 w-56 h-40  flex justify-center items-end px-4 py-10  bg-[url('/public/uploads/kartyaStilusLight.png')] shadow-2xl 
                                        dark:bg-[url('/public/uploads/kartyaStilus.png')] bg-cover bg-center
                                        border border-transparent rounded-md font-bold text-xs text-black dark:text-gray-800 uppercase tracking-widest

                            <div className="flex items-center justify-center">
                                {quizzes && quizzes.length < 1 && (
                                    <h1 className="text-xl">
                                        There are currently no quizzes available
                                        in this category.
                                    </h1>
                                )}
                            </div>
                            {quizzes && (
                                <div
                                    className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 h-128 overflow-scroll"
                                    onScroll={handleScroll}
                                >
                                    {quizzes.map((quiz) => (
                                        <Link
                                            key={quiz.id}
                                            href={`/quiz/${quiz.id}`}
                                            className="m-5 w-56 h-40  flex justify-center items-end px-4 py-10  bg-[url('/public/uploads/kartyaStilusLight.png')] shadow-2xl 
                                        dark:bg-[url('/public/uploads/kartyaStilus.png')] bg-cover bg-center
                                        border border-transparent rounded-md font-bold text-xs text-black dark:text-gray-800 uppercase tracking-widest"
                                        >
                                            {quiz.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
