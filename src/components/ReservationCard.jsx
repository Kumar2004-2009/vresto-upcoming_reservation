import { ClockIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function ReservationCard({
  id,
  venueName,
  date,
  time,
  partySize,
  status,
  onCancel,
}) {
  const statusStyles = {
    Confirmed: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-800 dark:text-green-200',
      icon: 'bg-green-500'
    },
    Pending: {
      bg: 'bg-yellow-100 dark:bg-yellow-900',
      text: 'text-yellow-800 dark:text-yellow-200',
      icon: 'bg-yellow-500'
    }
  };

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="bg-[var(--card-bg)] rounded-xl shadow-sm overflow-hidden border border-[var(--border-color)] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <div className="p-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] truncate mb-2">
              {venueName}
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]?.bg || 'bg-gray-100 dark:bg-gray-700'} ${statusStyles[status]?.text || 'text-gray-800 dark:text-gray-200'} uppercase tracking-wider`}>
                {status}
              </span>
              <span className="text-sm text-[var(--text-secondary)]">
                #{id}
              </span>
            </div>
          </div>
          
          <button
            onClick={() => onCancel(id)}
            className="px-4 py-2 text-sm font-medium text-white bg-[var(--cancel-bg)] hover:bg-[var(--cancel-hover)] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className={`flex items-start p-3 bg-[var(--bg-secondary)] rounded-lg shadow-xs border border-[var(--border-color)]`}>
            <div className={`p-2 rounded-lg ${statusStyles[status]?.icon || 'bg-gray-500'} text-white mr-3`}>
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-[var(--text-secondary)]">Date</p>
              <p className="font-medium text-[var(--text-primary)]">{formattedDate}</p>
            </div>
          </div>
          
          <div className="flex items-start p-3 bg-[var(--bg-secondary)] rounded-lg shadow-xs border border-[var(--border-color)]">
            <div className={`p-2 rounded-lg ${statusStyles[status]?.icon || 'bg-gray-500'} text-white mr-3`}>
              <ClockIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-[var(--text-secondary)]">Time</p>
              <p className="font-medium text-[var(--text-primary)]">{time}</p>
            </div>
          </div>
          
          <div className="flex items-start p-3 bg-[var(--bg-secondary)] rounded-lg shadow-xs border border-[var(--border-color)]">
            <div className={`p-2 rounded-lg ${statusStyles[status]?.icon || 'bg-gray-500'} text-white mr-3`}>
              <UserGroupIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-[var(--text-secondary)]">Party Size</p>
              <p className="font-medium text-[var(--text-primary)]">
                {partySize} {partySize === 1 ? 'person' : 'people'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}