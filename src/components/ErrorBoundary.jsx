import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="py-20 text-center text-dark-500">
          <p className="text-lg">일시적인 오류가 발생했습니다.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
          >
            다시 시도
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
