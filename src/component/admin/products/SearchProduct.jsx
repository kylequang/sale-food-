
import React, { Component } from 'react';
import callApi from '../../../callApi';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
const  temp_product=[];//Dùng lưu trữ sản phẩm tìm thấy
class ShowSearchProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            products: [],
            status1: true, 
            status2:false,
        }
    }
    componentDidMount=async()=> {
      await  callApi(`/products`, 'GET', null).then(pro => {
            this.setState({
                loading: true,
                products: pro.data
            })
          
        });  
    }
     //xóa user
     delete_Product = (name) => {
         //lấy tên account -> lấy được id -> xóa
         let id='';
         this.state.products.map((pro)=>{
            if(pro.name==name){
                id=pro.id;
            }
         })
        
        callApi(`/products/${id}`, 'DELETE', null).then((p) => {
            this.setState({
                products: this.state.products.filter(p => p.id != id)
            })
            alert("Xóa sản phẩm thành công");
            window.location.reload();
            this.props.history.push('/admin')
        })
    }
    





    render() {
        return (
            <div className="row" style={{ marginTop: '10px' }}>

                <div className='col-lg-1 col-md-1 col-sm1'></div>
                <div className="col-md-10 col-lg-10 col-sm-10">
                    <h1>Search product</h1>
                    <table style={{ border: '1px solid red' }} className="table table-hover" >
                        <thead style={{ border: '1px solid red' }}>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>price_sell</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody style={{ border: '1px solid red' }}>
                            {
                                temp_product.map((_product, index) => (

                                    <tr key={index} >
                                        <td>{_product.id}</td>
                                        <td><img src={_product.image} style={{ width: '70px', height: '50px' }}   /></td>
                                        <td>{_product.name}</td>
                                        <td>{_product.price}</td>
                                        <td>{_product.price_sell}</td>
                                        <td>{_product.description}</td>
                                        <td>
                                            {_product.status}
                                            <BootstrapSwitchButton 
                                             onChange= {() => {

                                                 if(_product.checkstatus==true){
                                                    let product={                          
                                                        status:"hết hàng",
                                                        checkstatus:!_product.checkstatus
                                                    }
                                                    callApi(`/products/${_product.id}`,"PUT",product).then((product)=>{
                                                        alert('Cập nhật thành công');
                                                        window.location.reload();
                                                        this.props.history.push('/admin');
                                                    })
                                                 }else{
                                                    let product={                     
                                                        status:"còn hàng",
                                                        checkstatus:!_product.checkstatus
                                                    }
                                                    callApi(`/products/${_product.id}`,"PUT",product).then((product)=>{
                                                        alert('Cập nhật thành công');
                                                        // window.location.reload();
                                                    })
                                                 }                                                    
                                             }
                                            }
                                            checked={_product.checkstatus} 
                                            onstyle="warning" />                                  
                                        </td>
                                        <td>
                                            <Link to={`/edit_product/${_product.id}`}>
                                                <span className="badge badge-warning text-white">edit</span>
                                            </Link>
                                        </td>
                                        <td><button type='submit' className="badge badge-danger" onClick={() => this.delete_Product(_product.name)}>remove</button></td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className='col-lg-1 col-md-1 col-sm'></div>
            </div>

        );
    }
}







class SearchProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
            products: [], //mảng lưu trữ data products
            nhanbiet: 0,
            length:0, // dùng để nhận biết ko tìm thấy -> length == products.length
            value: ''
        }
    }
    componentDidMount=async()=> {
      await  callApi(`/products`, 'GET', null).then(pro => {
            this.setState({
                products: pro.data // set data cho state products
            })
        });
    }

    //function tìm kiếm sản phẩm
    Search = () => {
        //giá trị nhập vào từ ô input tìm kiếm
        const { value } = this.state;


        this.state.products.map((pro, index) => {
            //Hàm includes tìm kiếm trả về true
            if (pro.id.includes(Number(value)) == true
                ||pro.name.includes(value)==true
                ||pro.type.includes(value)==true

                // ||user.sdt.search(value)
                // ||user.address.search(value) 
            ) {
                temp_product[index] = pro; // gán đối tượng tìm thấy cho mảng temp_product 

                this.setState({
                    nhanbiet: this.state.nhanbiet++ //tiến hành cho biến nhận biết + 1-> nếu nhận biết !=0 ->tìm được
                });
            }
            else { //nếu ko thì tăng biến length lên
                this.setState({
                    length: this.state.length++,
                });
            }
        } 
        )

        if(this.state.length==this.state.products.length){ //có nghĩa là ko tìm thấy sản phẩm nào
            this.setState({
                nhanbiet:0
            })          
            alert("Không tìm thấy thông tin sản phẩm");
            this.setState({
                length:0 //thiết lập lại giá trị
            })
        }
    }


    onChangeInput = (e) => {
        this.setState({ value: e.target.value })
    }


    render() {
        if (this.state.nhanbiet !=0 ) {
            return (
                <ShowSearchProduct></ShowSearchProduct> //hiển thị danh sách sản phẩm tìm kiếm
            )
        }
        else if (this.state.nhanbiet == 0) {
            return (
                <div className='container-fluid'>
                    <br></br>
                    <div className='row'>
                        <div className='col-lg-1 col-md-1 col-sm1'></div>
                        <div className="col-md-10 col-lg-10 col-sm-10">
                            <input onChange={this.onChangeInput} type='text' name='input_Search' placeholder='Search Product' />
                            <button type='submit' onClick={this.Search}><i className="fa fa-search"></i></button>
                        </div>
                        <div className='col-lg-1 col-md-1 col-sm1'></div>
                    </div>
                </div>
            );
        }
    }
}

export default SearchProduct;