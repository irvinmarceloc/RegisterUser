import React from 'react'

export const Users = () => {
    
    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <form onSubmit="{handleSubmit}">
                    
                </form>
            </div>
            <div className="col md-8">

            </div>
        </div>
    )   
}