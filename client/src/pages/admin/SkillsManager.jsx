import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Plus, Trash2, X, Save } from 'lucide-react';
// import axios from 'axios';

const SkillsManager = () => {
    // Mock data
    const [skills, setSkills] = useState([
        { id: 1, name: 'React', category: 'Frontend', proficiency: 90 },
        { id: 2, name: 'Node.js', category: 'Backend', proficiency: 85 },
        { id: 3, name: 'MongoDB', category: 'Database', proficiency: 80 },
    ]);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ name: '', category: 'Frontend', proficiency: 50 });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this skill?')) {
            setSkills(skills.filter(s => s.id !== id));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSkill = { ...formData, id: Date.now() };
        setSkills([...skills, newSkill]);
        setIsEditing(false);
        setFormData({ name: '', category: 'Frontend', proficiency: 50 });
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-dark">Manage Skills</h1>
                <button 
                    onClick={() => setIsEditing(true)}
                    className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
                >
                    <Plus className="w-4 h-4" /> Add Skill
                </button>
            </div>

            {isEditing && (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">New Skill</h2>
                        <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-dark">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-end">
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Skill Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. React" />
                        </div>
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select name="category" value={formData.category} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary">
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Database">Database</option>
                                <option value="DevOps">DevOps</option>
                                <option value="Tools">Tools</option>
                            </select>
                        </div>
                        <div className="flex-1 min-w-[100px]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Proficiency (%)</label>
                            <input type="number" name="proficiency" value={formData.proficiency} onChange={handleInputChange} min="1" max="100" className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 flex items-center gap-2 h-[42px]">
                            <Save className="w-4 h-4" /> Save
                        </button>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-600">Skill</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-600">Category</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-600">Proficiency</th>
                            <th className="px-6 py-3 text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {skills.map((skill) => (
                            <tr key={skill.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">{skill.name}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                        {skill.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => handleDelete(skill.id)} className="text-red-600 hover:text-red-800">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
};

export default SkillsManager;
