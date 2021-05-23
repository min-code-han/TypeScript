{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;
  // function printLoginState(resourceLoadState: ResourceLoadState) {
  //   if (resourceLoadState.state === 'loading') {
  //     console.log('👀 loading...');
  //   }
  //   if (resourceLoadState.state === 'success') {
  //     console.log('😃 loaded');
  //   }
  //   if (resourceLoadState.state === 'fail') {
  //     console.log('😱 no network');
  //   }
  // }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        console.log('👀 loading...');
        break;
      case 'success':
        console.log(`😃 ${state.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknon state :${state}`);
    }
  }
}
