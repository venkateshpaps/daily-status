import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as productActions from "./actionCreators/products";
import ProductList from "./components/productList";
import AddProduct from './components/addProduct';
import EditProduct from './components/editProduct';
class App extends Component {
  componentWillMount() {
    this.props.actions.getProducts();
  }
  handleDelete = (prod) => {
    this.props.actions.deleteProduct(prod);
    window.location.href = "/";
  }
  handleOnChangeAdd = (e) => {
    console.log("onchange")
    const name = e.target.name;
    const value = e.target.value;
    const addItem = {};
    addItem[name] = value;
    this.props.actions.addInputChange(addItem);
  }
  handleClickAdd = (productAdd) => {
    this.props.actions.addProduct(productAdd);
    window.location.href = "/";
  }
  handleEdit = (prod) => {
    this.props.actions.editProduct(prod);
  }
  handleEditChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const editItem = {};
    editItem[name] = value;
    this.props.actions.editInputChange(editItem);
  }
  handleClickEdit = (editProducts) => {
    this.props.actions.editSuccessProduct(editProducts);
    window.location.href = "/";
  }
  handlePagination = (num) => {
    this.props.actions.paginate(num);
  }
  handleModal = () => {
    this.props.actions.modalToggle();
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>this.props.loading?(<h1>Loading...Breath in...Breath out...in...out...</h1>):(
              <ProductList
                {...props}
                products={this.props.productsList}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
                handlePaginateClick={this.handlePagination}
                currentPageNum={this.props.currentPageNumber}
                contentNumber={this.props.pageContentNumber}
                modalShow={this.props.modalStatus}
                modalClick={this.handleModal}
              />)
            }
          />
          <Route
            path="/add-product"
            render={props =>
              <AddProduct
                {...props}
                tempProd={this.props.productAdd}
                onChangeAdd={this.handleOnChangeAdd}
                onClickAdd={this.handleClickAdd}
              />
            }
          />
          <Route
            path="/edit-product"
            render={props =>
              <EditProduct
                {...props}
                editProducts={this.props.editProd}
                onChangeEdit={this.handleEditChanges}
                onClickEdit={this.handleClickEdit}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    productsList: state.products,
    productAdd: state.addProduct,
    editProd: state.editProduct,
    currentPageNumber: state.currentPage,
    pageContentNumber: state.contentPerPage,
    modalStatus: state.modalOpened,
    loading:state.loading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
