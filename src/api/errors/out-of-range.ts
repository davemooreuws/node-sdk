// Copyright 2021, Nitric Technologies Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * OutOfRangeError
 * 
 * The operation was attempted outside of valid range
 * e.g. seeking past the end of a file or array, or specifying invalid offsets
 */
 export class OutOfRangeError extends Error {
	constructor (message: string) {
		super(message);
		Object.setPrototypeOf(this, OutOfRangeError.prototype);
	}
}