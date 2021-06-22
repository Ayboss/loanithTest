import React, {useState} from 'react';
import UserCard from '../components/UserCard';
import NewUsers from '../components/NewUsers';
import PendingUsers from '../components/PendingUsers';
import ActiveUsers from '../components/ActiveUsers';
import DelinquentUsers from '../components/DelinquentUsers';
import LockedUsers from '../components/LockedUsers';
import BarredUsers from '../components/BarredUsers';

const usersjsx = {
    newUsers: <NewUsers /> ,
    pendingUsers: <PendingUsers />,
    activeUsers: <ActiveUsers />,
    delinquentUsers: <DelinquentUsers />,
    lockedUsers: <LockedUsers />,
    barredUsers: <BarredUsers />
}
function Users() {
   const [userCategory, setUserCategory] = useState('newUsers');
    return (
        <div className="home__body">
            <div className="home__stats">
                <h3 className="home__stats-heading">Users</h3>
                <UserCard title="New Users" figure={43} onClick={()=>setUserCategory('newUsers')} />
                <UserCard title="Pending Users" figure={40} onClick={()=>setUserCategory('pendingUsers')}/>
                <UserCard title="Active Users" figure={39} onClick={()=>setUserCategory('activeUsers')}/>
                <UserCard title="Delinquent Users" figure={35} onClick={()=>setUserCategory('delinquentUsers')}/>
                <UserCard title="Locked Users" figure={20} onClick={()=>setUserCategory('lockedUsers')}/>
                <UserCard title="Barred Users" figure={24} onClick={()=>setUserCategory('barredUsers')}/>
            </div>
            <div className="home__graphs">
                 {usersjsx[userCategory]}
            </div>
        </div>
    )
}

export default Users
