import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Trash2, Mail } from 'lucide-react';

const MessagesManager = () => {
    // Mock data
    const [messages, setMessages] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Project Inquiry', message: 'Hi, I would like to discuss a project.', date: '2023-10-25' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', subject: 'Job Offer', message: 'We are hiring!', date: '2023-10-26' },
    ]);

    const handleDelete = (id) => {
        if (window.confirm('Delete this message?')) {
            setMessages(messages.filter(m => m.id !== id));
        }
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-dark">Messages</h1>
            </div>

            <div className="space-y-4">
                {messages.map((message) => (
                    <div key={message.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded-full">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark">{message.subject}</h3>
                                    <p className="text-sm text-gray-500">{message.name} &lt;{message.email}&gt; • {message.date}</p>
                                </div>
                            </div>
                            <button onClick={() => handleDelete(message.id)} className="text-gray-400 hover:text-red-500">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                            {message.message}
                        </p>
                    </div>
                ))}

                {messages.length === 0 && (
                    <div className="text-center py-12 text-gray-500 bg-white rounded-xl shadow-sm">
                        <Mail className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>No new messages.</p>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default MessagesManager;
