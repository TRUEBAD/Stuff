import React from 'react'

export default class Equalizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addend1: 0,
            addend2: 0,
            equals: null,
            sign: '',
            
              
        }
        this.chage = this.chage.bind(this)
        this.chagee = this.chagee.bind(this)
        this.operation = this.operation.bind(this)
        this.eequals = this.eequals.bind(this)
        this.line = this.line.bind(this)
    }

    chage(feel){
        if (this.state.equals !== null){
            this.setState((state) => {
                return{
                    equals:null
                }
            })
        }
        if (this.state.sign === '' ){
            this.setState((state) => {
            return {
              addend1: (state.addend1*=10)+feel,
              
            }
          })}
        else(this.setState((state) => {
            return {
              addend2: (state.addend2*=10)+feel
            }
          }))

    }
    chagee(feel){
        this.setState(
            {addend1: feel,
                addend2: feel,
                sign: '',
                equals:null
            }
            )
    }
    operation(count){
        this.setState((state) => {
            return {
              sign: count
            }
          })
        }

    eequals(){
        if (this.state.sign === '+'){
            this.setState((state) =>{
                return{
                    equals: this.state.addend1+this.state.addend2,
                    addend1: 0,
                    addend2:0,
                    sign: ''
                }
            })
        }
        else if (this.state.sign === '-'){
            this.setState((state) =>{
                return{
                    equals: this.state.addend1-this.state.addend2,
                    addend1: 0,
                    addend2:0,
                    sign:''
                }
            })
        }
        else if (this.state.sign === '*'){
            this.setState((state) =>{
                return{
                    equals: this.state.addend1*this.state.addend2,
                    addend1: 0,
                    addend2:0,
                    sign:''
                }
            })
        }
        else if (this.state.sign === '/'){
            this.setState((state) =>{
                return{
                    equals: this.state.addend1/this.state.addend2,
                    addend1: 0,
                    addend2:0,
                    sign:''
                }
            })
        }

    }
    line(){
        if(this.state.sign === '' && this.state.equals ===null){
            return this.state.addend1
        }
        else if(this.state.sign !== '' && this.state.equals ===null){
            return this.state.addend2
        }
        else{
            return this.state.equals
            
        }
    }

    squarerooo(){
        this.setState((state) =>{
            return{
                equals: Math.pow(this.state.addend1,0.5)
            }
        })
    
    }


render(){
    return (
        <fragment>
            <h1>{this.line()}</h1>
            <div className = 'row'>
            <button className = 'col'onClick={()=> this.chagee(0)}>
                    Clear</button>
            
            
            </div>
            <div className = 'row'>
            <button className = 'col'onClick={()=> this.squarerooo()}>
            √</button>
            <button 
                className= "col"
                onClick={()=> this.chage(7)}>
                    7
                </button>
                <button 
                className= "col"
                onClick={()=> this.chage(8)}>
                    8
                </button>
                <button 
                className= "col"
                onClick={()=> this.chage(9)}>
                    9
                </button>
                <button 
                className= "col"
                onClick={()=> this.operation('/')}>
                    /
                </button>
            </div>
            <div className = 'row'>
            <button 
                className= "col"
                onClick={()=> this.chage(4)}>
                    4
                </button>
                <button 
                className= "col"
                onClick={()=> this.chage(5)}>
                    5
                </button>
                <button 
                className= "col"
                onClick={()=> this.chage(6)}>
                    6
                </button>
                <button 
                className= "col"
                onClick={()=> this.operation('*')}>
                    *
                </button>
            </div>
            <div className = 'row'>
            <button 
                className= "col"
                onClick={()=> this.chage(1)}>
                    1
                </button>
                <button 
                className= "col"
                onClick={()=> this.chage(2)}>
                    2
                </button>
                <button 
                className= "col"
                onClick={()=> this.chage(3)}>
                    3
                </button>
                <button 
                className= "col"
                
                onClick={()=> this.operation('-')}>
                    -
                </button>
                
            </div>
            <div className = 'row'>
            <button className = "col"
            onClick={()=>this.eequals()}
            >Enter</button>
           
            <button 
                className= "col"
                onClick={()=> this.chage(0)}>
                    0
                </button>
                <button 
                className= "col"
                onClick={()=> this.operation('+')}>
                    +
                </button>
            </div>
        </fragment>
        
    )
}
}
