import React from 'react';

interface DetailCardProps {
  title: string;
  icon: React.ReactNode;
  content: string | string[];
  color: string;
}

export const DetailCard: React.FC<DetailCardProps> = ({
  title,
  icon,
  content,
  color,
}) => {
  return (
    <div
      className={`flex-1 bg-card transition-all duration-300 p-4 rounded-lg shadow-md max-w-[300px] ${
        title === 'Key Points' && '-my-5'
      } `}
    >
      <div className='flex items-center gap-2 mb-4'>
        <div className={`p-2 rounded-lg ${color}`}>{icon}</div>
        <h3 className={`font-semibold text-lg text-foreground `}>{title}</h3>
      </div>
      {Array.isArray(content) ? (
        <ul className='space-y-2'>
          {content.map((item, index) => (
            <li key={index} className='flex items-start gap-2'>
              <span className='text-foreground'>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
};
