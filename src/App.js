import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { Routes, Route } from 'react-router-dom';


const App = () => {

const activeMenu= true;

  return (
    

<div>
    <BrowserRouter>
    <div className= "flex relative dark:bg-main-dark-bg">
        <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
        <TooltipComponent content="settings" position="Top" >
            <button type="button" className="text-3xl p-3 
            hover:drop-shadow-xl hover:bg-light-gray text-white" style={{background: 'blue', borderRadius:'50%'}} > <FiSettings/> </button>

        </TooltipComponent>

        {/* Menu Logic Activation */}
        </div> 
        {activeMenu ? (
            <div className='w-72 sidebar dark:bg-secondary-dark-bg bg-white'>
                SideBar
            </div>)
            
        : (
            <div className='w-0 dark:bg-secondary-dark-bg'> 
                SideBar Hide w-0
            </div>

        )}

        {/* Navigation bar */}

        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? "md:ml-72" : "flex-2"}`}>
            <div className='fixed md:static bg-main-bg 
            dark:bg-main-dark-bg navbar w-full'>
                Navbar

            </div>
        </div>

        <div>
            <Routes>
                {/*Dashboard*/}
                <Route path="/" element="ECommerce"/>
                <Route path="/ecommerce" element="ECommerce"/>

                 {/* Pages */}
                <Route path="/orders" element="Orders"/>
                <Route path="/employes" element="Employes"/>
                <Route path="/customers" element="Customers"/>

                 {/* Apps */}
                 <Route path="/kanban" element="Kanban"/>
                 <Route path="/editor" element="Editor"/>
                 <Route path="/calendar" element="Calendar"/>
                 <Route path="/color-picker" element="ColorPicker"/>

                 {/* Charts */}
                 <Route path="/line" element="Line"/>
                 <Route path="/area" element="Area"/>
                 <Route path="/bar" element="Bar"/>
                 <Route path="/pie" element="Pie"/>
                 <Route path="/financial" element="Financial"/>
                 <Route path="/color-mapping" element="ColorMapping"/>
                 <Route path="/pyramid" element="Pyramid"/>
                 <Route path="/stacked" element="Stacked"/>
                 



            </Routes>
        </div>

    </div>
    </BrowserRouter>

     </div>

)
}

export default App
