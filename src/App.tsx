import * as React from 'react';
import SavingPlan from './components/SavingPlan/SavingPlan';
import '~/components/styles/app.scss';
import '~/components/styles/header.scss';

const  App: React.FunctionComponent = () => {
   return (
    <div className="origin" data-theme="light">
      <header className="mainHeader">
			<a href="/">
			  <img src={require('~/icons/logo.svg')}/>
			</a>
      </header>
	  <div className="wrapper">
		<SavingPlan/>
	  </div>
    </div>
  );
};

export default App;
