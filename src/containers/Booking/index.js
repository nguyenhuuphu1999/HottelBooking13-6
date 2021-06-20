import React from 'react';
import { useState } from 'react';
import { Steps } from 'antd';
import './style.scss'
import Step1 from './Containers/Step1'
import Step2 from './Containers/Step2'
import Step3 from './Containers/Step3'

import './style.scss'
const { Step } = Steps;

const Index = () => {

  

  

    const [ stepPageCurrent, setStepPageCurrent ] = useState(1)

    return (
        <div>
            <div className="build">
                <div>
                    <Steps current={stepPageCurrent}>
                        <Step title="Finished" description="This is a description." />
                        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>
                </div>
                <div >
                    {
                        (stepPageCurrent == 0)?
                         <div>
                            <Step1 setStepPageCurrent={setStepPageCurrent} stepPageCurrent={stepPageCurrent}/>
                        </div>:(stepPageCurrent == 1)?
                        <div>
                            <Step2 setStepPageCurrent={setStepPageCurrent} stepPageCurrent={stepPageCurrent}/>
                        </div>:
                        <div>
                            <Step3 setStepPageCurrent={setStepPageCurrent} stepPageCurrent={stepPageCurrent}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Index;