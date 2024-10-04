import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
                <div className="max-w-7xl mx-auto p-5 md:px-10 xl:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="flex flex-col justify-center gap-8">
                        <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px] xl:text-[58px] xl:leading-[74px] text-secondary">
                            Host, Connect, Celebrate: Your Events, Our Platform
                        </h1>
                        <p className="text-[20px] font-normal leading-[30px] md:text-[24px] md:leading-[36px] text-slate-950">
                            Book and learn helpful tips from 3,344+ mentors in
                            world-class companies with our global community.
                        </p>
                        <button className="rounded-full h-[54px] bg-primary-700 text-white p-4">
                            Explore Now
                        </button>
                    </div>

                    <img
                        src="/images/hero.png"
                        alt="hero"
                        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
                    />
                </div>
            </section>

            <section className="p-5 md:p-10 max-w-7xl mx-auto bg-white">
                <p className="text-[18px] leading-[28px] mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem odit eveniet ad rem ratione labore dicta iure, numquam
                    quia saepe quo earum veritatis dignissimos incidunt delectus
                    eum voluptatem distinctio ab!
                </p>
                <p className="text-[18px] leading-[28px] mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem odit eveniet ad rem ratione labore dicta iure, numquam
                    quia saepe quo earum veritatis dignissimos incidunt delectus
                    eum voluptatem distinctio ab!
                </p>
                <p className="text-[18px] leading-[28px] mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem odit eveniet ad rem ratione labore dicta iure, numquam
                    quia saepe quo earum veritatis dignissimos incidunt delectus
                    eum voluptatem distinctio ab!
                </p>
                <p className="text-[18px] leading-[28px] mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem odit eveniet ad rem ratione labore dicta iure, numquam
                    quia saepe quo earum veritatis dignissimos incidunt delectus
                    eum voluptatem distinctio ab!
                </p>
            </section>
        </AuthenticatedLayout>
    );
}
