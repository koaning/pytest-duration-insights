<script context="module">
    export function formatTime(ms) {
        if (ms < 1000) {
            return `${ms} ms`;
        } else if (ms < 60000) {
            return `${(ms / 1000).toFixed(1)} s`;
        } else if (ms < 3600000) {
            return `${(ms / 60000).toFixed(1)} min`;
        } else {
            return `${(ms / 3600000).toFixed(1)} h`;
        }
    }
</script>
