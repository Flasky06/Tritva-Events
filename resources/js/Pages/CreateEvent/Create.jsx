// resources/js/Pages/CreateEvent.jsx
import React from "react";
import { useForm } from "@inertiajs/inertia-react";

const CreateEvent = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        category: "Conference",
        price: "",
        available_tickets: "",
        location_type: "physical",
        location: "",
        virtual_link: "",
        start_date: "",
        end_date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/events", data);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-5 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Create Event</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Event Title"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.title && (
                        <div className="text-red-500 text-sm">
                            {errors.title}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Event Description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    ></textarea>
                    {errors.description && (
                        <div className="text-red-500 text-sm">
                            {errors.description}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <select
                        value={data.category}
                        onChange={(e) => setData("category", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="Conference">Conference</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Webinar">Webinar</option>
                        <option value="Meetup">Meetup</option>
                        <option value="Concert">Concert</option>
                        <option value="Festival">Festival</option>
                    </select>
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        placeholder="Price"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        placeholder="Available Tickets"
                        value={data.available_tickets}
                        onChange={(e) =>
                            setData("available_tickets", e.target.value)
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <select
                        value={data.location_type}
                        onChange={(e) =>
                            setData("location_type", e.target.value)
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="physical">Physical</option>
                        <option value="virtual">Virtual</option>
                        <option value="both">Both</option>
                    </select>
                </div>
                {data.location_type !== "virtual" && (
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Physical Location"
                            value={data.location}
                            onChange={(e) =>
                                setData("location", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                )}
                {data.location_type === "virtual" && (
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Virtual Link"
                            value={data.virtual_link}
                            onChange={(e) =>
                                setData("virtual_link", e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                )}
                <div className="mb-4">
                    <input
                        type="datetime-local"
                        value={data.start_date}
                        onChange={(e) => setData("start_date", e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="datetime-local"
                        value={data.end_date}
                        onChange={(e) => setData("end_date", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className={`w-full p-2 bg-blue-600 text-white rounded ${
                        processing ? "opacity-50" : ""
                    }`}
                >
                    {processing ? "Creating..." : "Create Event"}
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
