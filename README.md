# evolution-bootcamp-home-task

```
A car rides through a road section, where some parts of the road could be damaged.

The road section is given as an array "roadWithDamages" of ten boolean elements.

If the element inside the array has value - true, it means the road section is damaged.

The car's ride has to be implemented as a loop, where each iteration - one step forward (the next element of the array).

After each step the function has to write in console "The car goes to step ${i + 1}".

If the car detects a damage (boolean value - true):
 - for the first time, it has to write in console "The car is damaged", but it can continue to go to the next step
 - for the second time, it has to write in console "The car is broken" and it can not continue to drive anymore
```
## Console output example
```
moveCar([false, false, false, false, true, false, true, false, false, false]);

The car goes to step 1
The car goes to step 2
The car goes to step 3
The car goes to step 4
The car is damaged
The car goes to step 6
The car is broken
```
## Requirements
Write your solution in the car.js file.
No other file or code modifications expected.
## Tests
Run npm install to install all dependencies.
You can debug your solution using the command "npm run debug".
The concole output will show you the result.

Good luck!

## License

At CodeScreen, we strongly value the integrity and privacy of our assessments. As a result, this repository is under exclusive copyright, which means you **do not** have permission to share your solution to this test publicly (i.e., inside a public GitHub/GitLab repo, on Reddit, etc.). <br>

## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Complete task` link on <a href="https://app.codescreen.com/candidate/633ad1a781937f1cf8e12e27" target="_blank">this screen</a>.