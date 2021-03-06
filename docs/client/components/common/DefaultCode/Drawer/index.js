export const defaultCode = `
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ open: !prevState.open }) );
  }

  render() {
    return (
      <div>
        <PreviewBlock header="Simple Drawer">
          <Button onClick={this.handleClick} type="primary">click to open drawer</Button>
          <Drawer open={this.state.open}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </Drawer>
        </PreviewBlock>
      </div>
    )
  }
}
`;
