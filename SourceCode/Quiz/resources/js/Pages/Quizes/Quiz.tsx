import QuizesLayout from '@/Layouts/QuizesLayout';
import { Head } from '@inertiajs/react';


export default function Quizes({ quizes }: any) {
    
    let quizList = [];
    for(const i in quizes){
        quizList.push(quizes[i]);
        
    }
    
    //console.log(quizList);

    return (
        
        <QuizesLayout
           quiz={quizList}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100"></div>
                    </div>
                </div>
            </div>
        </QuizesLayout>
    );
}
