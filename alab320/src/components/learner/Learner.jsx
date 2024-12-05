import React from 'react'
import './Learner.css'

export const Learner = ({learner}) => {
  return (
    <div className='learner'>
        <h5>Name :  <span style={{fontWeight:200}}>{learner.name}</span> </h5>
        <h5>bio :  <span style={{fontWeight:200}}>{learner.bio}</span> </h5>
        {
            learner.scores.map((score,key)=>{
                return (
                    <div>
                          <h5>Date :  <span style={{fontWeight:200}}>{score.date}</span> </h5>
                          <h5>Score :  <span style={{fontWeight:200}}>{score.score}</span> </h5>

                    </div>
                )
            })
        }
    </div>
  )
}
