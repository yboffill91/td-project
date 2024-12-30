import React from 'react';
import { BlogPostContent } from './utils';

interface Props {
  block: BlogPostContent;
}

export function RichContent({ block }: Props) {
  const renderContent = () => {
    switch (block.type) {
      case 'paragraph':
        return <p className='text-foreground/50 mb-6'>{block.content}</p>;

      case 'heading':
        const Tag = `h${
          block.metadata?.level || 2
        }` as keyof JSX.IntrinsicElements;
        const id = block.content.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return (
          <Tag id={id} className='scroll-mt-24 font-bold text-foreground mb-6'>
            {block.content}
          </Tag>
        );

      case 'list':
        const ListTag = block.metadata?.ordered ? 'ol' : 'ul';
        return (
          <ListTag
            className={`mb-6 pl-6 ${
              block.metadata?.ordered ? 'list-decimal' : 'list-disc'
            }`}
          >
            {block.content.split('\n').map((item, i) => (
              <li key={i} className='text-foreground/50 mb-2'>
                {item}
              </li>
            ))}
          </ListTag>
        );

      case 'quote':
        return (
          <blockquote className='border-l-4 border-blue-500 pl-4 italic mb-6'>
            <p className='text-foreground/50'>{block.content}</p>
            {block.metadata?.citation && (
              <cite className='text-sm text-gray-500 dark:text-gray-400 mt-2 block'>
                — {block.metadata.citation}
              </cite>
            )}
          </blockquote>
        );

      case 'code':
        return (
          <pre className='bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto'>
            <code className='font-mono text-sm whitespace-pre'>
              {block.content}
            </code>
          </pre>
        );

      case 'image':
        return (
          <figure className='mb-6'>
            <img
              src={block.content}
              alt={block.metadata?.caption || ''}
              className='w-full rounded-lg'
            />
            {block.metadata?.caption && (
              <figcaption className='text-sm text-gray-500 dark:text-gray-400 text-center mt-2'>
                {block.metadata.caption}
              </figcaption>
            )}
          </figure>
        );

      case 'table':
        const columns = block.metadata?.columns || [];
        const rows = block.content.split('\n').map((row) => row.split('|'));

        return (
          <div className='overflow-x-auto mb-6'>
            <table className='w-full border-collapse'>
              <thead>
                <tr>
                  {columns.map((col, i) => (
                    <th key={i} className='border p-2 bg-card font-bold'>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className='border p-2'>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return renderContent();
}
