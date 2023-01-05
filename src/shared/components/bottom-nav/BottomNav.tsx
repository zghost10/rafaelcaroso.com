import { useState, SyntheticEvent, useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useMenuContext } from '../../contexts';
import Icon from '@mui/material/Icon';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BottomNav() {
  const [value, setValue] = useState('');
  const { menuOptions } = useMenuContext();
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setValue(location.pathname.replace('/',''))
  },[location])

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    navigate(newValue);
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      {menuOptions.map(option => (
        <BottomNavigationAction key={option.path} label={option.label} value={option.path} icon={<Icon>{option.icon}</Icon>} />
      ))}
    </BottomNavigation>
  );
}