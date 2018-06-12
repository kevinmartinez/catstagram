import React from 'react'

class ProtectedScreen extends Rect.PureComponent {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const { children } = this.props
    return (
      <FirebaseAuthContext.Consumer>
        {({ isUserSignedIn }) => {
          if (isUserSignedIn) {
            return children
          }
          return <Redirect to="/login" />
        }}
      </FirebaseAuthContext.Consumer>
    )
  }
}

export default


export default ProtectedScreen
