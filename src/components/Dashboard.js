import React from 'react';




const Dashboard = () => {
  return (
    <div className="dashboard p-16">
        <div className="grid grid-cols-4 gap-4 h-32 "> 
        <div className="bg-purple-500 rounded-md flex justify-center items-center">
            <h2 className="font-bold text-white">Movie Name</h2>
        </div>
        <div className="bg-slate-500 rounded-md flex justify-center items-center">
        <h2 className="font-bold text-white">Movie Date</h2>
        </div>
        <div className="bg-slate-400 rounded-md flex justify-center items-center">
        <h2 className="font-bold text-white">Seat Number</h2>
        </div>
        <div className="bg-slate-700 rounded-md flex justify-center items-center">
        <h2 className="font-bold text-white">Totat Count</h2>
        </div>
        </div>
    
    </div>
);
};

export default Dashboard;
