import { tools } from '@/features/pricing/constants';
import { Check, X } from 'lucide-react';

export const ToolsTable = () => {
  return (
    <div className='mt-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4'>
      <h4 className='text-lg font-semibold mb-4 text-gray-900 dark:text-white'>
        Digital Tools Access
      </h4>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-gray-200 dark:border-gray-700'>
              <th className='text-left py-2 text-sm font-medium text-gray-500'>
                Tool
              </th>
              <th className='text-center py-2 text-sm font-medium text-gray-500'>
                Starter
              </th>
              <th className='text-center py-2 text-sm font-medium text-gray-500'>
                Growth
              </th>
              <th className='text-center py-2 text-sm font-medium text-gray-500'>
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {tools.map(
              ({
                name,
                icon: IconElement,
                description,
                starterAccess,
                growthAccess,
                enterpriseAccess,
              }) => (
                <tr key={name} className='border-b'>
                  <td className='py-3'>
                    <div className='flex items-center gap-2'>
                      <IconElement className='size-5' />
                      <div>
                        <div className='font-medium '>{name}</div>
                        <div className='text-foreground/50 mt-1 text-xs'>
                          {description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='text-center py-3 text-sm text-foreground/70'>
                    {starterAccess.included ? (
                      <div>
                        <Check className='w-5 h-5 text-secondary-green mx-auto mb-1' />
                        <span className='text-xs'>{starterAccess.limit}</span>
                      </div>
                    ) : (
                      <X className='w-5 h-5 text-foreground/50 mx-auto' />
                    )}
                  </td>
                  <td className='text-center py-3 text-sm text-foreground/70'>
                    {growthAccess.included ? (
                      <div>
                        <Check className='w-5 h-5 text-secondary-green mx-auto mb-1' />
                        <span className='text-xs'>{growthAccess.limit}</span>
                      </div>
                    ) : (
                      <X className='w-5 h-5 text-foreground/50 mx-auto' />
                    )}
                  </td>
                  <td className='text-center py-3 text-sm text-foreground/70'>
                    {enterpriseAccess.included ? (
                      <div>
                        <Check className='w-5 h-5 text-secondary-green mx-auto mb-1' />
                        <span className='text-xs'>
                          {enterpriseAccess.limit}
                        </span>
                      </div>
                    ) : (
                      <X className='w-5 h-5 text-foreground/50 mx-auto' />
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
