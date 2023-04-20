import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { HomeProps } from "@/types/HomeProps";

export default function Home({ auth, quizzes }: HomeProps) {
    function loadQuiz(id:number){
        fetch(`/quiz/param?param=${id}`, {
            method : "GET",
            /*body: JSON.stringify({
                getid : id
            }),*/
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
                                    <PrimaryButton className="m-2" onClick={()=>loadQuiz(quiz.id)}>
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
