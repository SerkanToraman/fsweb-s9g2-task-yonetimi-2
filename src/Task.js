import React from "react";
import { differenceInDays,formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';

const Task = ({ taskObj, onComplete }) => {

    const deadlineDate = new Date(taskObj.deadline);
    const formatDistanceResult = formatDistanceToNow(deadlineDate,
      {addSuffix: true,
      locale: tr},
    );
    
   const bgClass = differenceInDays(deadlineDate ,new Date())<=3 ? "bg-[#ffd9d4]" : "bg-[#d2d5fd]";

    
    

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span className={bgClass}>{formatDistanceResult}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
