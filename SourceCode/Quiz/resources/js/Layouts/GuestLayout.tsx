import ApplicationLogo from "@/Components/ApplicationLogo";
import ThemeSwitcher from "@/Components/ThemeSwitcher";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren<{}>) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-sky-300 dark:bg-sky-950">
            <ThemeSwitcher />
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-orange-400 dark:text-orange-600" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-sky-600 dark:bg-blue-900 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
