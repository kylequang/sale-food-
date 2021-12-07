import { Component } from "react";


export default class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: [],
    };
  }
  componentDidMount() {
    this.setState({
      quantity: this.props.product.quantity,
    });
  }
  render(props) {
    return (
      <div>
        <tr>
          <td width={600}>
            {/* <div style={{width:50,alignSelf:"center"}}>{this.props.product.id}</div> */}
            <figure className="itemside align-items-center">
              <div className="aside">
                {/* <img src={this.props.product.image} className="img-sm" /> */}
              </div>
              <figcaption className="info">
                <a className="title text-dark" data-abc="true">
                  {this.props.product.name}
                </a>
              </figcaption>
            </figure>
          </td>
          <td width={400}>
            <div className="text-muted ">
              <h6> {this.props.product.type} </h6>
            </div>
          </td>
          <td width={300}>
            <div className="price-wrap">{this.props.product.price}</div>
          </td>
          <td width={300}>
            <div style={{ display: "flex" }}>
              <button onClick={()=>this.props.minus(this.props.product.id_product)}>-</button>
              <input className="quantity" readOnly value={this.props.product.quantity} />
              <button onClick={()=>this.props.plus(this.props.product.id_product)}>+</button>
            </div>
          </td>
          <td width={300}>
            <div className="cost-wrap">{this.props.product.cost}</div>
          </td>
          <td width={100}>
            <button type='button'
              className="btn btn-light text-right "
              onClick={()=>this.props.delete(this.props.product.id_product)}
            >
              Remove
            </button>
          </td>
        </tr>
      </div>
    );
  }
}
