import SelectDropdown from "@/Components/SelectDropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { HomeProps } from "@/types/HomeProps";
import { Link, router } from "@inertiajs/react";
import { useEffect } from "react";

const noCategorySelectedValue = "None";

export default function Home({ auth, quizzes, categories }: HomeProps) {
    categories = [{ id: -1, category: noCategorySelectedValue }, ...categories];

    function handleOnCategorySelect(value: string) {
        if (!categories.find((c) => c.category === value)) return;
        router.get(
            value == noCategorySelectedValue ? `/` : `/?category=${value}`
        );
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-sky-600 dark:bg-blue-900 shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 flex justify-center">
                            <div className=" mt-4 mr-6">
                                <SelectDropdown
                                    values={categories.map((c) => c.category)}
                                    onSelect={handleOnCategorySelect}
                                    selectedValue={""}
                                    placeholder="F"
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
                                        hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                                    >
                                        {quiz.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
