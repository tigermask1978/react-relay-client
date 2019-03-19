import React, { Component } from "react";
import AppBarComponent from "./components/AppBarComponent";
import BookListComponent from "./components/BookListComponent";
import BookItemDialog from "./components/BookItemDialog";
import AddBookMutation from "./mutations/AddBookMutation";
import environment from "./Environment";
import RemoveBookMutaion from "./mutations/RemoveBookMutation";
import ModifyBookMutation from "./mutations/ModifyBookMutation";

class App extends Component {
  state = {
    searchTerm: "",
    openBookItemDialog: false,
    bookName: "",
    bookDesc: "",
    bookPages: "",
    dialogTitle: "",
    isAddOperation: false
  };

  handleSearchInputChange = e => {
    const value = e.target.value;
    // console.log("searchTerm:", value);
    this.setState({
      searchTerm: value
    });
  };

  openBookItemDialog = () => {
    this.setState({
      isAddOperation: true,
      dialogTitle: "添加书籍",
      openBookItemDialog: true
    });
  };

  handleBookItemDialogCancel = () => {
    this.setState({
      bookName: "",
      bookDesc: "",
      bookPages: "",
      openBookItemDialog: false,
      dialogTitle: "",
      isAddOperation: false
    });
  };

  handleBookItemDialogInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log("name:", name);
    // console.log("value:", value);
    this.setState({
      [name]: value
    });
  };

  handleBookItemDialogOK = () => {
    // console.log("book name:", this.state.bookName);
    // console.log("book desc:", this.state.bookDesc);
    // console.log("book pages:", this.state.bookPages);
    if (this.state.isAddOperation) {
      AddBookMutation.commit(
        environment,
        this.state.bookName,
        this.state.bookDesc,
        this.state.bookPages,
        this.state.searchTerm
      );
      this.setState({
        bookName: "",
        bookDesc: "",
        bookPages: "",
        openBookItemDialog: false,
        dialogTitle: "",
        isAddOperation: false
      });
    } else {
      // console.log("Update operation.");
      ModifyBookMutation.commit(
        environment,
        this.state.bookId,
        this.state.bookName,
        this.state.bookDesc,
        this.state.bookPages,
        this.state.searchTerm
      );
      this.setState({
        bookName: "",
        bookDesc: "",
        bookPages: "",
        openBookItemDialog: false,
        dialogTitle: ""
      });
    }
  };

  handleDeleteBook = bookId => {
    RemoveBookMutaion.commit(environment, bookId, this.state.searchTerm);
  };

  handleModifyBook = bookNode => {
    // console.log(bookNode.id);
    //这里仅仅打开对话框，传入参数，通过对话框的确定按钮处理更新的动作
    this.setState({
      bookId: bookNode.id,
      bookName: bookNode.name,
      bookDesc: bookNode.desc,
      bookPages: bookNode.pages,
      dialogTitle: "修改书籍",
      openBookItemDialog: true
    });
  };

  render() {
    return (
      <div>
        <AppBarComponent
          searchTerm={this.state.searchTerm}
          handleSearchInputChange={this.handleSearchInputChange}
          openBookItemDialog={this.openBookItemDialog}
        />
        <BookListComponent
          searchTerm={this.state.searchTerm}
          handleDeleteBook={this.handleDeleteBook}
          handleModifyBook={this.handleModifyBook}
        />
        <BookItemDialog
          open={this.state.openBookItemDialog}
          handleBookItemDialogCancel={this.handleBookItemDialogCancel}
          bookName={this.state.bookName}
          bookDesc={this.state.bookDesc}
          bookPages={this.state.bookPages}
          dialogTitle={this.state.dialogTitle}
          isAddOperation={this.state.isAddOperation}
          handleBookItemDialogInputChange={this.handleBookItemDialogInputChange}
          handleBookItemDialogOK={this.handleBookItemDialogOK}
        />
      </div>
    );
  }
}

export default App;
