# React Native useEffect Cleanup Error

This repository demonstrates a common error in React Native applications involving the `useEffect` hook's cleanup function.  The error occurs when the cleanup function attempts to access component state or props after the component has already unmounted. This often leads to unexpected behavior and crashes.

## The Problem

The `bug.js` file contains a React component that uses `useEffect` to set up an interval. The cleanup function attempts to log the component's state ('count') after the component is unmounted, resulting in an error.

## The Solution

The `bugSolution.js` file provides a corrected version of the component. It addresses the issue by checking if the component is still mounted before accessing the state in the cleanup function.  This prevents errors and ensures a more robust component lifecycle.