import React from 'react';
import ReactDOM from 'react-dom';






class Card extends React.Component {
    render() { // react ele -> DOM
        
        return(
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div className="card mb-3">
                    <img className="card-img-top" src={this.props.img} alt={this.props.imgalt} />
                    <div className='card-body'>
                        <h4 className='card-title'>{this.props.productName}</h4>
                            price: <strong>{this.props.price}</strong>
                        <p className='card-text'>{this.desc}</p>
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
            </div>
        );
    }
}

class CardContainer extends React.Component{
    constructor(props){
        //부모 컴포넌트로 props 전달 
        super(props);
        //컴포넌트의 state객체 초기화 ; 로컬변수 
        this.state = {
            cards:[]
        };
    }
    componentDidMount(){
        fetch('cards.json')
    .then(res => res.json())
    .then((result) => {
        this.setState({
            cards: result
    });

    }
    )

    }
    // 나머지 컴포넌트 로직 
    render() {
        // 카드 정보 
        const cards = this.state.cards;
        let items = cards.map(
            card => <Card key={card.id}{...card}/>
        );
        return (
            <div className='container pt-4'>
                <h3 className='text-center text-primary'>Products</h3>
                <div className='pt-4 row'>
                    {items}
                </div>
            </div>
        );
           // state객체에 데이터를 저장한다.    
        
        

    
                
   
}}

ReactDOM.render(
    <CardContainer />,
    document.getElementById('root')
);
