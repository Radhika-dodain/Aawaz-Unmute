window.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('issueChart').getContext('2d');

    const issueChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Menstruation', 'Mental Health', 'Domestic Abuse', 'Hygiene', 'Identity'],
            datasets: [{
                label: 'Reported Issues (Sample)',
                data: [12, 19, 30, 5, 8],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
