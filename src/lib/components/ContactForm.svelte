<script>
	let submissionStatus = '';

	const handleSubmit = async (data) => {
		submissionStatus = 'submitting';

		const formData = new FormData(data.currentTarget);

		const res = await fetch('/api/send-message', {
			method: 'POST',
			body: formData
		});

		const { message } = await res.json();
		submissionStatus = message;
	};
</script>

{#if submissionStatus === 'submitting'}
	<p>Sending your message...</p>
{:else if submissionStatus === 'failed'}
	<p>Sorry, sending failed. Please, try again later.</p>
{:else if submissionStatus === 'success'}
	<p>Your message has been sent. Thank you!</p>
{:else}
	<form action="" class="contact-form" on:submit|preventDefault={handleSubmit}>
		<h2 class="form-header">Submit a message</h2>
		<input
			type="text"
			name="name"
			aria-label="name"
			placeholder="Your name"
            maxlength="128"
			required
			class="form-field"
		/>
		<input
			type="email"
			name="email"
			aria-label="email"
			placeholder="Your email"
            maxlength="128"
			required
			class="form-field"
		/>
		<textarea
			name="message"
			aria-label="name"
			placeholder="Your message"
			required
			rows="5"
            maxlength="3500"
			class="form-field"
		/>
		<input type="submit" class="form-submit" />
	</form>
{/if}

<style lang="postcss">
	.contact-form {
		max-width: 600px;
		font-family: inherit;

		& .form-header {
			margin-bottom: 3rem;
		}

		& .form-field {
			display: block;
			width: 100%;
			font-size: 1rem;
			line-height: 1.25;
			color: var(--text-secondary-color);
			outline: none;
			padding: 0.25rem 0.5rem;
			border: none;
			border-bottom: 1px solid var(--border-primary-color);
			border-radius: 1px;
			font-family: inherit;
			transition: all 0.15s ease-in-out;

			&:focus {
				border-color: var(--border-secondary-color);
			}

			& + .form-field {
				margin-top: 1.5rem;
			}
		}

		& textarea {
			resize: vertical;
		}

		& .form-submit {
			margin: 3rem 0;
			font-size: 1rem;
			padding: 1rem 1.5rem;
			cursor: pointer;
			border: none;
			background-color: var(--button-primary-color);
			color: var(--button-text-primary-color);
			opacity: 0.9;
			transition: all 0.15s ease-in-out;

			&:hover {
				opacity: 1;
			}
		}
	}
</style>
