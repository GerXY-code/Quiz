import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function GetQuizes({ quiz }: PropsWithChildren<{quiz:any}>) {
    

    quiz.forEach((element: any) => {
        console.log(element);
    });
    
   

    return (
        
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>
            <div>
            {quiz.map((item: any) => (
                <div className='indent'>{item.title}</div>
                

                ))}
            </div>
        </div>
    );
}
