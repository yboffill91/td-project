import {
  Service,
  ServiceDetail,
} from '@/features/pricing/constants';
import { Check, X } from 'lucide-react';

export const ServiceDetailTable = ({
  service,
  details,
}: {
  service: Service;
  details: ServiceDetail[];
}) => {
  return (
    <div className='mt-4 bg-card rounded-lg p-4'>
      <h4 className='text-lg font-semibold mb-4 text-card-foreground'>
        {service.name} Details
      </h4>
      {details.map(({ name, description, features }) => (
        <div key={name} className='mb-6'>
          <h5 className='font-medium  mb-2'>{name}</h5>
          <p className='text-sm text-foreground/70 mb-3'>{description}</p>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b '>
                  <th className='text-left py-2 text-sm font-medium text-foreground/50'>
                    Feature
                  </th>
                  <th className='text-center py-2 text-sm font-medium text-foreground/50'>
                    Starter
                  </th>
                  <th className='text-center py-2 text-sm font-medium text-foreground/50'>
                    Growth
                  </th>
                  <th className='text-center py-2 text-sm font-medium text-foreground/50'>
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map(
                  ({ name, starter, growth, enterprise, description }) => (
                    <tr key={name} className='border-b '>
                      <td className='py-3 text-sm'>
                        <div className='font-medium '>{name}</div>
                        {description && (
                          <div className='text-foreground/50 text-xs mt-1'>
                            {description}
                          </div>
                        )}
                      </td>
                      <td className='text-center py-3'>
                        {typeof starter === 'boolean' ? (
                          starter ? (
                            <Check className='size-5 text-secondary-green mx-auto' />
                          ) : (
                            <X className='size-5 text-foreground/50 mx-auto' />
                          )
                        ) : (
                          <span className='text-sm text-foreground/50 '>
                            {starter}
                          </span>
                        )}
                      </td>
                      <td className='text-center py-3'>
                        {typeof growth === 'boolean' ? (
                          growth ? (
                            <Check className='size-5 text-secondary-green mx-auto' />
                          ) : (
                            <X className='size-5 text-foreground/50 mx-auto' />
                          )
                        ) : (
                          <span className='text-sm text-foreground/50 '>
                            {growth}
                          </span>
                        )}
                      </td>
                      <td className='text-center py-3'>
                        {typeof enterprise === 'boolean' ? (
                          enterprise ? (
                            <Check className='size-5 text-secondary-green mx-auto' />
                          ) : (
                            <X className='size-5 text-foreground/50 mx-auto' />
                          )
                        ) : (
                          <span className='text-sm text-foreground/50 '>
                            {enterprise}
                          </span>
                        )}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};
