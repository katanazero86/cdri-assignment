import { useLocation, useNavigate } from 'react-router';
import Typography from '../typography/Typography.tsx';
import { NAV_TABS } from '../../constants/header.constants.ts';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  const activeStyles = `after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-primary after:content-['']`;

  return (
    <header className="h-[80px] bg-white px-[160px] py-[24px] flex items-center relative">
      <Typography as="h1" className="font-bold text-text-primary text-[24px]">
        CERTICOS BOOKS
      </Typography>
      <nav className="absolute left-1/2 flex items-center">
        {NAV_TABS.map((tab) => (
          <a
            className={`text-text-primary text-[20px] [&:not(:first-child)]:ml-[56px] cursor-pointer relative ${location.pathname === tab.path ? activeStyles : ''}`}
            key={tab.path}
            onClick={(e) => handleClick(e, tab.path)}
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
