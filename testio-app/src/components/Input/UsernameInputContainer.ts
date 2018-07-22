import { connect } from 'react-redux';
import { setLoginInput } from '../../features/loginForm/actions';
import { IApp } from '../../types';
import Input from './Input';

const usernamePlaceholder = 'username';

const mapStateToProps = (state: IApp) => ({
  placeholder: usernamePlaceholder,
  value: state.form.username
});

const mapDispatchToProps = (dispatch: any) => ({
  onChange: (value: string) => dispatch(setLoginInput(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);