import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
  render() {
    return (
      <div>
        <Dialog open={this.props.open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            {this.props.dialogTitle}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="bookName"
              name="bookName"
              value={this.props.bookName}
              onChange={this.props.handleBookItemDialogInputChange}
              label="书籍名称"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="bookDesc"
              name="bookDesc"
              value={this.props.bookDesc}
              onChange={this.props.handleBookItemDialogInputChange}
              label="书籍描述"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="bookPages"
              name="bookPages"
              value={this.props.bookPages}
              onChange={this.props.handleBookItemDialogInputChange}
              label="书籍页数"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.props.handleBookItemDialogCancel}
              color="primary"
            >
              取消
            </Button>
            <Button onClick={this.props.handleBookItemDialogOK} color="primary">
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
