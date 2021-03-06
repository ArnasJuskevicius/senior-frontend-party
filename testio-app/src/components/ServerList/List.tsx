import * as React from 'react';
import Header from './HeaderContainer';
import Row from './RowContainer';

interface IProps {
  onMount: () => void;
  uids: string[];
  isVisible: boolean;
}

class List extends React.Component<IProps> {
  public componentDidMount() {
    this.props.onMount();
  }

  public render() {
    const { uids, isVisible } = this.props;
    if (!isVisible) {
      return null;
    }

    return (
      <div className="container-fluid">
        <Header />
        {uids.map(uid => <Row uid={uid} key={uid} />)}
      </div>
    );
  }
}

export default List;
