const btn = document.querySelector('.form__btn');
const steps = document.querySelectorAll('.step');
const points = document.querySelectorAll('.point');
let currentStep = 0;

initialize();

btn.addEventListener('click', function (event) {
  event.preventDefault();
  toggleStep();
});

points.forEach((point) => {
  point.addEventListener('click', function (event) {
    const dataOrder = event.target.getAttribute('data-order');
    const current = steps[dataOrder];
    if (current.classList.contains('visited')) {
      steps.forEach((step) => {
        if (step.classList.contains('active'))
          step.classList.remove('active');

        if (step.classList.contains('done'))
          step.classList.remove('done');
      })

      for (let i = 0; i < dataOrder; i++) {
        steps[i].classList.add('done');
      }
  currentStep = dataOrder;
      steps[dataOrder].classList.add('active');
    }
  });
})

function toggleStep() {
  steps[currentStep].classList.remove('active');
  steps[currentStep].classList.add('done');

  if (currentStep < steps.length - 1) {
    currentStep++;
    steps[currentStep].classList.add('active', 'visited');
  }
}

function initialize() {
  steps[0].classList.add('active', 'visited');
}
