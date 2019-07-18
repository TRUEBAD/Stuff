import React from 'react'

export default class Equalizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addend1: 0,
            addend2: null,
            equals: null,
            sign: '',
            sign2: '',
            decimal1: false,
            decimal2: false,
            yes:false
             
        }
        this.chage = this.chage.bind(this)
        this.chagee = this.chagee.bind(this)
        this.operation = this.operation.bind(this)
        this.eequals = this.eequals.bind(this)
        this.line = this.line.bind(this)
    }

    chage(feel){
        if (this.state.yes === true){
            this.setState((state) => {
                return{
                    equals:null,
                    yes: false,
                    addend1: 0
                }
            })
        }
        
        if (this.state.sign === '' || this.state.yes === true){
            this.setState((state) => {
            return {
              addend1: (state.addend1*=10)+feel,
              yes: false
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
                addend2: null,
                sign: '',
                equals:null,
                sign2: '',
                yes:false
            }
            )
    }
    operation(count){
    
        if (this.state.sign === ''){
        this.setState(() => {
            return {
              sign: count,
              yes:false
            }
          })
        }
        else if (this.state.sign !== '' && count !== ''){
            this.eequals(count)
        }
    }

    eequals(count){
        if (this.state.sign === '+' && count === ''){
            this.setState(() =>{
                return{
                    equals: this.state.addend1+this.state.addend2,
                    addend1:0,
                    addend2: null,
                    sign: '',
                    sign2: '',
                    yes: true
                }
            })    
        }
        else if (this.state.sign === '+' && count === '+'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1+this.state.addend2,
                    addend2: null,
                    sign: '+',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '+' && count === '-'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1+this.state.addend2,
                    addend2: null,
                    sign: '-',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '+' && count === '*'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1+this.state.addend2,
                    addend2: null,
                    sign: '*',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '+' && count === '/'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1+this.state.addend2,
                    addend2: null,
                    sign: '/',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '-' && count === ''){
            this.setState(() =>{
                return{
                    equals: this.state.addend1-this.state.addend2,
                    addend1:0,
                    addend2: null,
                    sign: '',
                    sign2: '',
                    yes:true
                }
            })    
        }
        else if (this.state.sign === '-' && count === '+'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1-this.state.addend2,
                    addend2: null,
                    sign: '+',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '-' && count === '-'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1-this.state.addend2,
                    addend2: null,
                    sign: '-',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '-' && count === '*'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1-this.state.addend2,
                    addend2: null,
                    sign: '*',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '-' && count === '/'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1-this.state.addend2,
                    addend2: null,
                    sign: '/',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '*' && count === ''){
            this.setState(() =>{
                return{
                    equals: this.state.addend1*this.state.addend2,
                    addend1:0,
                    addend2: null,
                    sign: '',
                    sign2: '',
                    yes:true
                }
            })    
        }
        else if (this.state.sign === '*' && count === '+'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1*this.state.addend2,
                    addend2: null,
                    sign: '+',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '*' && count === '-'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1*this.state.addend2,
                    addend2: null,
                    sign: '-',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '*' && count === '*'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1*this.state.addend2,
                    addend2: null,
                    sign: '*',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '*' && count === '/'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1*this.state.addend2,
                    addend2: null,
                    sign: '/',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '/' && count === ''){
            this.setState(() =>{
                return{
                    equals: this.state.addend1/this.state.addend2,
                    addend1:0,
                    addend2: null,
                    sign: '',
                    sign2: '',
                    yes: true
                }
            })    
        }
        else if (this.state.sign === '/' && count === '+'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1/this.state.addend2,
                    addend2: null,
                    sign: '+',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '/' && count === '-'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1/this.state.addend2,
                    addend2: null,
                    sign: '-',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '/' && count === '*'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1/this.state.addend2,
                    addend2: null,
                    sign: '*',
                    sign2: count
                }
            })
        }
        else if (this.state.sign === '/' && count === '/'){
            this.setState(() =>{
                return{
                    equals: this.state.addend1/this.state.addend2,
                    addend2: null,
                    sign: '/',
                    sign2: count
                }
            })
        }
                }

    line(){
        if(this.state.addend2 ===  null && this.state.equals === null){
            return this.state.addend1
        }
        else if(this.state.sign !== null && this.state.equals ===null){
            return this.state.addend2
        }
        else{
            this.setState((state)=> {
                return{
                    addend1: this.state.equals,
                    equals: null
                }
            })}
            return this.state.addend1
        }
    

    squarerooo(){
        this.setState(() =>{
            return{
                equals: Math.pow(this.state.addend1,0.5)
            }
        })
    
    }
    // decimal(){
    //     if (this.state.sign === '' ){
    //         this.setState((state) => {
    //         return {
    //           decimal1:true
              
    //         }yes
    //       })}
    //     else{(this.setState((state) => {
    //         return {
    //           decimal2:true
    //         }
    //       }))}

    // }

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
                onClick={()=> this.chage( )}>
                    TBD
                </button>
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
                onClick={()=> this.chage( )}>
                    TBD
                </button>
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
            onClick={()=>this.eequals('')}
            >Enter</button>
           
            <button 
                className= "col"
                onClick={()=> this.chage(0)}>
                    0
                </button>
                {/* <button 
                className= "col"
                onClick={()=> this.decimal()}>
                    .
                </button> */}
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
