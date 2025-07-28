import Image from 'next/image'

export default function RecommendPage(
    { first_name, last_name, username, age, job, img }:
        {
            first_name: string,
            last_name: string,
            username: string,
            age?: string,
            job?: string,
            img?: string
        }
) {

    let profile = "../../profile.svg"
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-10">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Recommendations</h1>
                    <p className="text-gray-600 mt-1">See what others are saying about you.</p>
                </div>

                {/* Profile Summary */}
                <section className="bg-white rounded-xl shadow-md p-6 mb-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <div className=" rounded-full overflow-hidden border-2 border-blue-500 shadow">
                        <Image
                            className="rounded-full"
                            src={img ?? profile}
                            alt={`${first_name}`}
                            width={96}
                            height={96}
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold text-gray-800">{first_name} {last_name}</h2>
                        <p className="text-gray-600 text-sm">@{username}</p>
                        <p className="text-gray-700 mt-1">Age: <span className="font-medium">ToDo</span></p>
                    </div>
                    {/* Ratings */}
                    <div className="mt-4 gap-6">
                        <div className="items-center text-sm text-green-600">
                            <span className="text-yellow-400 text-xl mr-1">★★★★★</span>
                            <span>4.7 / 5.0</span>
                            <span className="ml-2 text-gray-500">(28 positive)</span>
                        </div>
                        <div className="items-center text-sm text-red-500">
                            <span className="text-red-400 text-xl mr-1">✖✖✖</span>
                            <span>3 negative</span>
                        </div>
                    </div>
                </section>

                {/* Recommendation Summary */}
                <section className="bg-blue-50 rounded-xl p-6 mb-10">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">What People Are Saying</h3>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-green-700 mb-2">Strengths</h4>
                            <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                                <li>Reliable and consistent</li>
                                <li>Great team collaborator</li>
                                <li>Excellent communication skills</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-700 mb-2">Areas for Growth</h4>
                            <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                                <li>Sometimes too detail-focused</li>
                                <li>Can delegate more effectively</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Referee Notes */}
                <section className="bg-white rounded-xl shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Referee Notes</h3>
                    <ul className="space-y-4">
                        <li className="border-l-4 border-blue-600 pl-4">
                            <p className="text-gray-700 text-sm italic">
                                "Working with {first_name} was always a pleasure. Their attention to detail made a huge difference."
                            </p>
                            <p className="text-sm text-gray-500 mt-1">— Alex M., Former Manager</p>
                        </li>
                        <li className="border-l-4 border-blue-600 pl-4">
                            <p className="text-gray-700 text-sm italic">
                                "They lead projects with calm confidence and always support the team."
                            </p>
                            <p className="text-sm text-gray-500 mt-1">— Jamie L., Team Lead</p>
                        </li>
                        <li className="border-l-4 border-blue-600 pl-4">
                            <p className="text-gray-700 text-sm italic">
                                "I'd recommend them to any employer looking for a strong, thoughtful contributor."
                            </p>
                            <p className="text-sm text-gray-500 mt-1">— Morgan S., Peer Reviewer</p>
                        </li>
                    </ul>
                </section>
            </div>

        </>
    )
}