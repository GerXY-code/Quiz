import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { HomeProps } from "@/types/HomeProps";

export default function Home({ auth, quizzes }: HomeProps) {
    function test(id:number){
        fetch(`/quiz`, {
            method : "POST",
            body: JSON.stringify({
                getid : id
            }),
            headers: { Accept: "application/json", "Content-Type": "application/json"}
        })
        .then(response => console.log(response)) 
    }
   

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid grid-cols-3 m-2">
                                {quizzes.map((quiz) => (
                                    <PrimaryButton className="m-2" onClick={()=>test(quiz.id)}>
                                        {quiz.title}
                                    </PrimaryButton>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
