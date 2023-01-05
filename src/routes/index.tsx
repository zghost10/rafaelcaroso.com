import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Contact, Works, About } from '../pages'
import { useLangContext, useMenuContext } from '../shared/contexts';
import { DefaultLayout } from '../shared/layouts'

export const Router = () => {
    const { setMenuOptions } = useMenuContext();
    const { getLang } = useLangContext()
    const lang: any = getLang
    
    useEffect(() => {
      setMenuOptions([
        {
          icon: 'home',
          path: '',
          label: lang.menu.home,
        },
        {
          icon: 'business_center',
          path: 'works',
          label: lang.menu.works,
        },
        {
          icon: 'call',
          path: 'contact',
          label: lang.menu.contact,
        },
        {
          icon: 'info',
          path: 'about',
          label: lang.menu.about,
        },
      ]);
    }, [lang]);

    return (
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/works' element={<Works/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
            </Route>
            <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
    )
}