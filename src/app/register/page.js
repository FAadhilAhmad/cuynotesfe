import react from "react";

function page() {
    return (
        <div>
            <div className="min-h-screen grid place-items-center bg-black ">
                <form className="w-80">

                    <div className="mb-4">
                        <label className="block text-gray-500 font-bold mb-1" htmlFor="full-name">
                            Full Name
                        </label>
                        <input
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
                            id="full-name"
                            type="text"
                            defaultValue="Jane Doe"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-500 font-bold mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
                            id="password"
                            type="password"
                            placeholder="******************"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center text-gray-500 font-bold text-sm">
                            <input className="mr-2" type="checkbox" />
                            Send me your newsletter!
                        </label>
                    </div>

                    <button
                        className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded w-full"
                        type="button"
                    >
                        Sign Up
                    </button>

                </form>
            </div>
        </div>
    )
}
export default page;