import Link from "next/link";
import Todo from "../app/components/todo";
import {prisma} from "./db";

export type TodoType = {
    id: string;
    title: string;
    complete: boolean;
    deleted: boolean;
};

export default async function Home() {

    function getTodos() {
        return prisma.todo.findMany({
        });
    }
    const todos = await getTodos();

    return (
        <>
            <header className="flex justify-center items-center flex-col mt-5">
                <h1 className="text-4xl underline underline-offset-4 mb-8">Todos</h1>
                <Link
                    href="/newitem"
                    className="border border-slate-300 text-slate-300 rounded px-4 py-2 bg-gray-500 hover:bg-gray-700 focus-within:bg-gray-700 outline-none text-lg font-bold"
                >
                    New
                </Link>

            </header>


            <div className="flex justify-center">
                <div className="border-4 border-gray-300 rounded p-3">
                    <ul className="pl-4 flex justify-center flex-col items-center border-2 border-gray-300 rounded p-4">
                        {
                            todos.map((todo: TodoType) => (
                                <li key={todo.id}>{todo.id} {todo.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>






        </>
    );
}