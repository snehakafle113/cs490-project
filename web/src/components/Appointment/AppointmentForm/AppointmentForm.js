import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const AppointmentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.appointment?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="summary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Summary
        </Label>

        <TextField
          name="summary"
          defaultValue={props.appointment?.summary}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="summary" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.appointment?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="start"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start
        </Label>

        <TextField
          name="start"
          defaultValue={props.appointment?.start}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="start" className="rw-field-error" />

        <Label
          name="end"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End
        </Label>

        <TextField
          name="end"
          defaultValue={props.appointment?.end}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="end" className="rw-field-error" />

        <Label
          name="user_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="user_id"
          defaultValue={props.appointment?.user_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="user_id" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AppointmentForm
