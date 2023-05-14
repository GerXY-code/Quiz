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
                    <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 flex flex-col">
                            <div className="my-4 ml-9 w-44">
                                <SelectDropdown
                                    values={categories.map((c) => c.category)}
                                    onSelect={(value) =>
                                        setSelectedCategory(value)
                                    }
                                    selectedValue={""}
                                    placeholder="Filter by category"
                                />
                            </div>
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
                                            className="w-56 h-40 my-3 mx-auto flex justify-center items-center bg-gray-800 dark:bg-gray-200
                                        border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest
                                        hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
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
