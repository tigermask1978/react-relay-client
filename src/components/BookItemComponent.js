import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

const styles = {
  card: {
    maxWidth: "85%",
    margin: 50
  },
  media: {
    height: 140
  }
};

class BookItemComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.node.name}
            </Typography>
            <Typography component="p">
              Pages: {this.props.node.pages}
            </Typography>
            <Typography component="p">{this.props.node.desc}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={bookId => this.props.handleDeleteBook(this.props.node.id)}
          >
            Delete
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={bookNode => this.props.handleModifyBook(this.props.node)}
          >
            Update
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(
  createFragmentContainer(
    BookItemComponent,
    graphql`
      fragment BookItemComponent_node on BookNode {
        id
        name
        desc
        pages
      }
    `
  )
);
