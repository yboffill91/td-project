import { motion } from 'framer-motion';

interface NavDropDownProps {
  ref?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  className?: string;
}

export const NavDropDown = ({ ref, children, className }: NavDropDownProps) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`absolute w-full mr-2 h-[calc(100vh-10rem)] md:h-auto top-16 left-0 bg-card p-4 shadow-lg overflow-y-auto rounded-lg  flex md:flex-row flex-col gap-2 ${className}`}
    >
      {children}
    </motion.div>
  );
};
